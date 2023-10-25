import '@/app/globals.css';
import "@/app/order-check/style.css";

import MainLayout from "@/_components/main-layout";
import Title from './_components/title';
import OrderDetail from "./_components/order-details";
import PurchasedProduct from "./_components/purchased-product";


export default function ServiceDetail() {
  return (
    <MainLayout>
      <Title />
      <OrderDetail />
      <PurchasedProduct />
    </MainLayout>
  )
}
