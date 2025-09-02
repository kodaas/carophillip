// Service Worker for Carophillip Heritage Pharmacy
// Version 1.0.0

const CACHE_NAME = 'carophillip-pharmacy-v1';
const OFFLINE_URL = '/offline.html';

// Resources to cache for offline functionality
const CACHE_RESOURCES = [
  '/',
  '/index.html',
  '/offline.html',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/index.css',
  '/site.webmanifest',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  // Add other critical resources
];

// API endpoints to cache
const API_CACHE_PATTERNS = [
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/fonts\.gstatic\.com/,
  /^https:\/\/api\.carophillipheritage\.com/,
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(CACHE_RESOURCES);
      })
      .then(() => {
        console.log('Service Worker: Installed successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Skip requests to other origins
  if (!event.request.url.startsWith(self.location.origin)) {
    // Handle external resources (fonts, etc.)
    const isExternalResource = API_CACHE_PATTERNS.some(pattern =>
      pattern.test(event.request.url)
    );

    if (isExternalResource) {
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            return fetch(event.request)
              .then((response) => {
                // Cache successful responses
                if (response.status === 200) {
                  const responseClone = response.clone();
                  caches.open(CACHE_NAME)
                    .then((cache) => {
                      cache.put(event.request, responseClone);
                    });
                }
                return response;
              })
              .catch(() => {
                // Return a fallback for failed external requests
                return new Response('External resource unavailable', {
                  status: 503,
                  statusText: 'Service Unavailable'
                });
              });
          })
      );
    }
    return;
  }

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request)
            .then((response) => {
              // Cache successful navigation responses
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseClone);
                  });
              }
              return response;
            })
            .catch(() => {
              // Return offline page for failed navigation
              return caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }

  // Handle other requests (assets, API calls, etc.)
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cache successful responses
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseClone);
              });

            return response;
          })
          .catch(() => {
            // Return appropriate fallback based on request type
            if (event.request.destination === 'image') {
              return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f3f4f6"/><text x="100" y="100" text-anchor="middle" dy="0.35em" fill="#6b7280" font-family="Arial, sans-serif" font-size="14">Image unavailable</text></svg>',
                {
                  status: 200,
                  headers: {
                    'Content-Type': 'image/svg+xml'
                  }
                }
              );
            }

            // Return a generic offline response
            return new Response(
              JSON.stringify({
                error: 'Network unavailable',
                message: 'This content is not available offline'
              }),
              {
                status: 503,
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      syncContactForms()
    );
  }

  if (event.tag === 'consultation-form') {
    event.waitUntil(
      syncConsultationForms()
    );
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  if (!event.data) {
    return;
  }

  const options = {
    body: event.data.text(),
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/action-icon-explore.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/action-icon-close.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Carophillip Heritage Pharmacy', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions
async function syncContactForms() {
  try {
    const db = await openDB();
    const forms = await getStoredForms(db, 'contact-forms');

    for (const form of forms) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(form.data),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        // Remove successfully synced form
        await deleteStoredForm(db, 'contact-forms', form.id);
      } catch (error) {
        console.error('Failed to sync contact form:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

async function syncConsultationForms() {
  try {
    const db = await openDB();
    const forms = await getStoredForms(db, 'consultation-forms');

    for (const form of forms) {
      try {
        await fetch('/api/consultation', {
          method: 'POST',
          body: JSON.stringify(form.data),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        // Remove successfully synced form
        await deleteStoredForm(db, 'consultation-forms', form.id);
      } catch (error) {
        console.error('Failed to sync consultation form:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// IndexedDB helpers for offline form storage
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('pharmacy-forms', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains('contact-forms')) {
        db.createObjectStore('contact-forms', { keyPath: 'id', autoIncrement: true });
      }

      if (!db.objectStoreNames.contains('consultation-forms')) {
        db.createObjectStore('consultation-forms', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

function getStoredForms(db, storeName) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function deleteStoredForm(db, storeName, id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.delete(id);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

// Cache management
async function cleanupCache() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(name => name !== CACHE_NAME);

  await Promise.all(
    oldCaches.map(name => caches.delete(name))
  );
}

// Periodic cache cleanup
setInterval(cleanupCache, 24 * 60 * 60 * 1000); // Clean up every 24 hours

// Message handling from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(event.data.urls))
    );
  }
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled promise rejection:', event.reason);
});
