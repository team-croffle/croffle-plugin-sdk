import type { PluginContext } from '@croffledev/croffle-types';

export async function activated(context: PluginContext) {
  console.log('Plugin has been activated!');

  // Example: Register a custom setting tab
  context.ui.registerSettingsTab('my-tab', {
    label: 'My Plugin Settings',
    render: (container) => {
      container.innerHTML = `
        <div style="padding: 20px;">
          <h2>Hello from My Plugin!</h2>
          <p>This is a custom settings tab rendered in Vanilla JS.</p>
        </div>
      `;
    }
  });

  // Example: Listen to application events
  context.app.event.on(context.enums.AppEventType.SCHEDULE_CREATE, (payload) => {
    console.log('A new schedule was created:', payload);
  });
}
