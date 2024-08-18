import CategoryBar from "@/components/CategoryBar";
import Header from "@/components/Header";
import Image from "next/image";
import productImage1 from "@/public/product/1.jpg";
import productImage2 from "@/public/product/2.jpg";
import productImage3 from "@/public/product/3.jpg";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";

export default function Home() {
  var features = ["Free shipping", "Electronics"];
  return (
    <div>
      {/* Product image viewer */}
      <div className="relative bg-red-600 h-96 my-4">
        <Image
          src={productImage1}
          layout="fill"
          objectFit="cover"
          className="object-contain"
        />
      </div>

      <div className="mx-3 mb-24">
        {/* Features bar */}
        <div className="space-x-2">
          {features.map((item) => (
            <div className="bg-green-500 inline-flex rounded-md">
              <p className="py-1 px-4 text-white font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* Product details */}
        <div className="space-y-3 my-8">
          <h1 className="font-bold text-3xl">Sony Headphone WH-123CUX</h1>
          <p className="text-justify text-gray-500">
            This is my exploration of Blondjoe - E-commerce Dashboard, hope you
            like it Need the design services? Please just focus on building your
            product, don't bother yourself with crafting branding, marketing
            design, or even the website. Let us handle them. Just send a brief
            to: hello@keitoto.com
          </p>
          <div className="flex space-x-2 items-center font-bold text-lg">
            <h1 className="line-through">₹1199</h1>
            <h1>₹254</h1>
            <div className="bg-green-500 inline-flex rounded-md text-base">
              <p className="py-1 px-4 text-white">79% off</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">8,200+ people bought this</p>
        </div>

        {/* Coupon code field */}
        <CustomInput
          placeholder="Enter your coupon code"
          label="Have a coupon code? Enter here 👇🏻"
        />
      </div>

      {/* Action bar */}
      <div className="flex items-center h-20 px-3 space-x-4 fixed bottom-0 inset-x-0 bg-gradient-to-b from-green-50 to-white">
        <p className="px-2 border-green-500 border-2 rounded-md">-</p>
        <p>1</p>
        <p className="px-2 border-green-500 border-2 rounded-md">+</p>
        <CustomButton title="Add to cart" />
        <CustomButton title="Buy now" />
      </div>
    </div>
  );
}
