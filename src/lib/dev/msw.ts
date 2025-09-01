async function initMocks() {
  if (typeof window === 'undefined') {
    return;
  }

  const { worker } = await import('../../mocks/browsers');
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}
initMocks();
export {};
