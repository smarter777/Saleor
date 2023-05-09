module.exports = {
  main: [
    {
      Overview: [
        "overview/introduction",
        "overview/architecture",
        "overview/features",
        "overview/resources",
      ],
    },
    {
      "Core concepts": [
        "developer/channels",
        "developer/products",
        "developer/attributes",
        "developer/checkout",
        "developer/payments",
        "developer/stock-allocation",
        "developer/discounts",
        "developer/gift-cards",
        "developer/address",
        "developer/users",
        "developer/permissions",
        "developer/taxes",
        "developer/thumbnails",
        "developer/filtering",
      ],
    },
    {
      type: "category",
      label: "API Usage",
      items: [
        {
          type: "autogenerated",
          dirName: "api-usage",
        },
      ],
    },
    {
      type: "category",
      label: "Setup",
      items: [
        "cloud",
        {
          type: "autogenerated",
          dirName: "setup",
        },
        {
          type: "category",
          label: "Upgrade Guides",
          items: [
            {
              type: "autogenerated",
              dirName: "upgrade-guides",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Development",
      items: [
        "developer/running-saleor/debugging-emails",
        "developer/running-saleor/exposing-instance",
      ],
    },

    {
      type: "category",
      label: "Exporting Data",
      items: [
        "developer/export/export-overview",
        "developer/export/export-products",
        "developer/export/export-gift-cards",
      ],
    },
    {
      type: "category",
      label: "Saleor App Store",
      items: [
        "developer/app-store/overview",
        "developer/app-store/development",
        "developer/app-store/forking",
        {
          type: "category",
          label: "Apps",
          link: {
            type: "doc",
            id: "developer/app-store/apps/index",
          },
          items: [
            "developer/app-store/apps/taxes",
            "developer/app-store/apps/crm",
            "developer/app-store/apps/adyen",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Extending Saleor",
      items: [
        "developer/extending/overview",
        "developer/extending/integrations",
        require("./sidebars/apps-sidebar"),
        {
          type: "category",
          label: "Plugins",
          items: [
            "developer/extending/plugins/overview",
            "developer/extending/payment-gateways",
            {
              type: "category",
              label: "Internal APIs",
              items: [
                "developer/extending/api/errors",
                "developer/extending/api/events",
                "developer/extending/api/sorters",
                "developer/extending/api/i18n",
              ],
            },
            {
              type: "category",
              label: "Available Plugins",
              items: [
                "developer/available-plugins/admin-emails",
                "developer/available-plugins/adyen",
                "developer/available-plugins/dummy-credit-card",
                "developer/available-plugins/stripe",
                "developer/available-plugins/oidc",
                "developer/available-plugins/np-atobarai",
                "developer/available-plugins/user-emails",
              ],
            },
          ],
        },
        "developer/extending/apollo-federation",
        "developer/metadata",
      ],
    },
    {
      type: "category",
      label: "Community",
      items: [
        "developer/community/contributing",
        "developer/community/faq",
        "developer/community/support",
      ],
    },
  ],
  cli: ["cli"],
  api: [...require("./docs/api-reference/sidebar-schema.js").schemaSidebar],
  storefrontApi: [
    ...require("./docs/api-storefront/sidebar-schema.js").schemaSidebar,
  ],
};
