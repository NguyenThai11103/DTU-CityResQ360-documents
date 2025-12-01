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
      type: 'category',
      label: '🔌 Services',
      items:
        [
          {
            type: 'doc',
            id: 'Services/AIMLService/Readme',
          },
          {
            type: 'doc',
            id: 'Services/AnalyticsService/Readme',
          },
          {
            type: 'doc',
            id: 'Services/FloodEyeService/Readme',
          },
          {
            type: 'doc',
            id: 'Services/IncidentService/Readme',
          },
          {
            type: 'doc',
            id: 'Services/IoTService/Readme',
          },
          {
            type: 'doc',
            id: 'Services/MediaService/Readme',
          },
          {
            type: 'doc',
            id: 'Services/NotificationService/Readme',
          },
          {
            type: 'doc',
            id: 'Services/SearchService/Readme',
          },
          {
            type: 'doc',
            id: 'Services/WalletService/Readme',
          },
        ]
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
      type: 'doc',
      id: 'License',
      label: '📜 License',
    },
  ],
};

export default sidebars;
