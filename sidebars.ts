import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🚀 Giới thiệu',
    },
    {
      type: 'doc',
      id: 'GettingStarted',
      label: '📝 Tổng quan',
    },
    {
      type: 'doc',
      id: 'Architecture',
      label: '🏗️ Kiến trúc hệ thống',
    },
    {
      type: 'doc',
      id: 'Installation',
      label: '🔧 Hướng dẫn cài đặt',
    },
    {
      type: 'category',
      label: '🔌 Services',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'Services/index',
      },
      items: [
        {
          type: 'category',
          label: '🤖 AI/ML Service',
          items: [
            'Services/AIMLService/Readme',
          ],
        },
        {
          type: 'category',
          label: '📊 Analytics Service',
          items: [
            'Services/AnalyticsService/Readme',
          ],
        },
        {
          type: 'category',
          label: '🌊 FloodEye Service',
          items: [
            'Services/FloodEyeService/Readme',
          ],
        },
        {
          type: 'category',
          label: '🚨 Incident Service',
          items: [
            'Services/IncidentService/Readme',
          ],
        },
        {
          type: 'category',
          label: '📡 IoT Service',
          items: [
            'Services/IoTService/Readme',
          ],
        },
        {
          type: 'category',
          label: '🎬 Media Service',
          items: [
            'Services/MediaService/Readme',
          ],
        },
        {
          type: 'category',
          label: '🔔 Notification Service',
          items: [
            'Services/NotificationService/Readme',
          ],
        },
        {
          type: 'category',
          label: '🔍 Search Service',
          items: [
            'Services/SearchService/Readme',
          ],
        },
        {
          type: 'category',
          label: '💰 Wallet Service',
          items: [
            'Services/WalletService/Readme',
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'License',
      label: '📜 License',
    },
  ],
};

export default sidebars;
