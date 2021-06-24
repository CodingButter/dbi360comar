export const getProductsByUserId = async (user_id) => {
  const appServer = `${process.env.REACT_APP_SERVER}crud/read/products/${user_id}`;
  // Uncomment this when we want to use the real fetch. vv
  var response;
  switch (process.env.REACT_APP_DATA) {
    case "fetch":
      response = await fetch(appServer);
      break;
    case "dummy":
      response = await dummyFetch(appServer);
      break;
  }
  return await response.json();
};

// Dummy data
const dummyFetch = (url) => {
  return Promise.resolve({
    json: () => dummyData,
  });
};

const dummyData = [
  {
    id: 69511024,
    name: {
      es: "Zapato",
    },
    description: {
      es: '<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Borcego</font></font></p>\r\n',
    },
    handle: {
      es: "zapato",
    },
    attributes: [],
    published: true,
    free_shipping: false,
    requires_shipping: true,
    canonical_url: "https://pruebamodelado.mitiendanube.com/productos/zapato/",
    seo_title: {
      es: "",
    },
    seo_description: {
      es: "",
    },
    brand: "",
    created_at: "2020-11-26T16:51:12+0000",
    updated_at: "2021-06-21T06:46:35+0000",
    variants: [
      {
        id: 250994634,
        image_id: null,
        product_id: 69511024,
        position: 1,
        price: "1000.00",
        promotional_price: null,
        stock_management: false,
        stock: null,
        weight: "0.000",
        width: "0.00",
        height: "0.00",
        depth: "0.00",
        sku: null,
        values: [],
        barcode: null,
        created_at: "2020-11-26T16:51:12+0000",
        updated_at: "2021-06-21T06:46:33+0000",
      },
    ],
    tags: "",
    images: [
      {
        id: 135926871,
        product_id: 69511024,
        src: "https://d2r9epyceweg5n.cloudfront.net/stores/001/409/490/products/dsc_00011-3808b0db7c2ccb5e4e16079452579572-1024-1024.jpg",
        position: 1,
        alt: [],
        created_at: "2020-12-14T11:27:10+0000",
        updated_at: "2021-06-21T06:46:33+0000",
      },
    ],
    categories: [
      {
        id: 7614868,
        name: {
          es: "Mocasines",
        },
        description: {
          es: "",
        },
        handle: {
          es: "mocasines",
        },
        parent: null,
        subcategories: [],
        seo_title: {
          es: "",
        },
        seo_description: {
          es: "",
        },
        created_at: "2020-11-26T16:51:11+0000",
        updated_at: "2020-11-26T16:51:12+0000",
      },
    ],
  },
];
