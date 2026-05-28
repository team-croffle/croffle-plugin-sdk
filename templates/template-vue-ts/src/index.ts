import { createApp } from 'vue';
import type { PluginContext } from '@croffledev/croffle-types';
import App from './App.vue';

export async function activated(context: PluginContext) {
  console.log('Vue Plugin has been activated!');

  // Register a custom settings tab
  context.ui.registerSettingsTab('vue-tab', {
    label: 'Vue Plugin Settings',
    render: (container) => {
      // Mount the Vue application into the provided container
      const app = createApp(App);
      app.mount(container);
    }
  });

  // Example: Listen to application events
  context.app.event.on(context.enums.AppEventType.SCHEDULE_CREATE, (payload) => {
    console.log('A new schedule was created:', payload);
  });
}
