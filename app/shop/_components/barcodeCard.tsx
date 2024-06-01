import React from "react";
import { IoBarcodeOutline } from "react-icons/io5";

function BarcodeCard() {
  return (
    <div className="group">
      <div className="flex justify-end items-center">
        <p className="p-2 lg:p-4 text-xl text-end sm:text-md md:text-xl font-black capitalize lg:text-[1.7rem] xl:text-[2rem] xl:leading-8">
          Barcode search enabled
        </p>
        <h2 className="text-[100px] group-hover:animate-pulse xl:text-[120px]">
          <IoBarcodeOutline />
        </h2>
      </div>
      <div className="sm:hidden md:block">
        <p className="text-sm text-gray-500 p-1 md:p-0 lg:p-2 text-center">
          Utilising QuaggaJS for accurate barcode scanning.
          <span className="hidden lg:inline">
            {" "}
            It is now easier than ever to find products!
          </span>
        </p>
      </div>
    </div>
  );
}

export default BarcodeCard;
