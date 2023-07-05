export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "phonenumber",
    headerName: "Number",
    type: "number",
    width: 200,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

export const userRows = [
  {
    id: 1,
    username: "Olivia",
    email: "olivia@gmail.com",
    Number: 987615243,
  },
  {
    id: 2,
    username: "Sujan",
    email: "Sujan@gmail.com",
    Number: 987615243,
  },

];

// export const productColumns = [
//   { field: "partNumber", headerName: "PART NO", width: 100 },
//   {
//     field: "product",
//     headerName: "Product",
//     width: 230,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img className="cellImg" src={params.row.img} alt="avatar" />
//           {params.row.product}
//         </div>
//       );
//     },
//   },
//   { field: "brands", headerName: "Brands", width: 100 },
//   { field: "description", headerName: "Description", width: 230 },
//   {
//     field: "price",
//     headerName: "Price",
//     type: "number",
//     width: 100,
//   },
//   {
//     field: "stock",
//     headerName: "Stock",
//     width: 100,
//   },
//   {
//     field: "addtoCart",
//     headerName: "Add to cart",
//     width: 160,
//     renderCell: () => {
//       return (
//         <div className="addtoCart">
//           <span>Add to cart</span>
//         </div>
//       );
//     },
//   },
// ];

// export const productRows = [
//   {
//     partNumber: "DRBDM063",
//     img: "/assets/carbattery.jpg",
//     product: "DRIVETEC 063 CAR BATTERY",
//     brands: "DRIVETEC",
//     description:
//       "Quality, durability and reliability sum up the DriveTec range of automotive and commercial batteries",
//     price: "$40.90",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "51Wy1UhvbZL",
//     img: "/assets/engineoil.jpg",
//     product: "Auto Parts Engine Oil Viscosity",
//     brands: "Turbo",
//     description: "Brand Generic Vehicle Service Type Scooter",
//     price: "$25.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "HJKDM063",
//     img: "/assets/engineoil2.jpg",
//     product: "ENGINE OIL",
//     brands: "Turbo",
//     description: "BMW ENGINE OIL TWIN POWER",
//     price: "$20.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "31CTWTB2",
//     img: "/assets/engineoil.jpg",
//     product: "HONDA 4 STROKE ENGINE OIL",
//     brands: "Platinum",
//     description: "GOOD QUALITY. EASY TO USE. LONG LASTING",
//     price: "$20.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "HRDDR3055",
//     img: "/assets/wheel.jpg",
//     product: "Platinum Plus - Wheel",
//     brands: "Platinum",
//     description: "AlUMINUM WHEEL; 15 X 6; 45MM OFFSET; 5 SPOKE",
//     price: "$160.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "FGH543",
//     img: "/assets/carbrush.jpg",
//     product: "Short Handle Car and Motocycle Wheel Brush",
//     brands: "Amazon",
//     description:
//       "Short-handled cleaning brush for removing dirt, dust and grime from Car, Motocycle",
//     price: "$18.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
//   {
//     partNumber: "YABYBX3055",
//     img: "/assets/.jpg",
//     product: "YUASA 055 3000 SERIES CAR BATTERY -4 YEAR WARRANTY",
//     brands: "YUASA",
//     description:
//       "Quality, durability and reliability sum up the DriveTec range of automotive and commercial batteries",
//     price: "$137.00",
//     stock: "in stock",
//     addtoCart: "Add to cart",
//   },
// ];
