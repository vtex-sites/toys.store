module.exports = {
  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'toys',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default channel
  channel: '{"salesChannel":"1"}',

  // Production URLs
  storeUrl: 'https://vtexfaststore.com',
  secureSubdomain: 'https://secure.vtexfaststore.com',
  checkoutUrl: 'https://secure.vtexfaststore.com/checkout',
  loginUrl: 'https://secure.vtexfaststore.com/api/io/login',
  accountUrl: 'https://secure.vtexfaststore.com/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:9000',
    pages: {
      home: '/',
      pdp: '/carrinho-de-bebe-para-boneca-bebezinho-real-roma-5687-1002125352-1/p',
      collection: '/produtos',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/carrinho-de-bebe-para-boneca-bebezinho-real-roma-5687-1002125352-1/p',
      collection: '/produtos',
      collection_filtered:
        '/produtos/?category-1=produtos&categoria=brinquedos&idade=3-6-anos&facets=category-1%2Ccategoria%2Cidade&sort=score_desc&page=0',
      search: '/s?q=carrinho',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },
}
