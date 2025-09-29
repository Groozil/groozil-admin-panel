import React from "react";
import Image from "next/image";
import { Eye, Users } from "lucide-react";

const TrendingProducts = () => {
  const topSelling = [
    {
      id: 1,
      name: "Leather Jacket",
      category: "Electronics",
      rating: 4.5,
      review: 2.9,
      price: "SAR 120",
      sold: 540,
    },
    {
      id: 2,
      name: "Sneakers",
      category: "Electronics",
      rating: 4.5,
      review: 2.9,
      price: "SAR 89",
      sold: 420,
    },
    {
      id: 3,
      name: "Headphones",
      category: "Electronics",
      rating: 4.5,
      review: 2.9,
      price: "SAR 59",
      sold: 380,
    },
  ];

  // Static trending offers
  const trendingOffers = [
    {
      id: 1,
      title: "Fresh Fruits Bundle",
      status: "Active",
      views: 74,
      users: 120,
      sale: "12%",
      expires: 2,
    },
    {
      id: 2,
      title: "Buy 1 Get 1",
      status: "Active",
      views: 36,
      users: 95,
      sale: "8%",
      expires: 4,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Top Selling Products */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Top Selling Products</h3>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {topSelling.map((p, index) => (
            <div
              key={p.id}
              className="border border-gray-200 rounded-lg p-3 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF5ED] flex items-center justify-center">
                    <p className="font-semibold text-[#F46609]">{index + 1}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{p.name}</div>
                    <div className="text-xs text-gray-500">
                      {p.category}
                      <span className="ml-2">⭐</span>
                      <span className="text-gray-800">{p.rating}</span>
                      <span>({p.review}K)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-sm font-semibold text-[#F46609]">
                    {p.price}
                  </div>
                  <div className="text-sm text-gray-500">{p.sold} Sold</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Offers */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Trending Offers</h3>
        </div>

        <div className="space-y-3">
          {trendingOffers.map((t) => (
            <div
              key={t.id}
              className="border border-gray-200 rounded-lg p-3 flex flex-col gap-3"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#EDF0F7] flex items-center justify-center">
                    <Image
                      src="/assets/images/fruit-1.jpg"
                      alt="offer-image"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium">{t.title}</div>
                      <div className="text-xs px-2 py-1 rounded-full bg-[#ECFDF3] text-[#12B76A]">
                        {t.status}
                      </div>
                    </div>
                    <div className="flex text-xs text-gray-500 mt-1">
                      <Eye className="w-4 h-4" />{" "}
                      <span className="ml-1">{t.views}</span>{" "}
                      <Users className="w-4 h-4 ml-2" />{" "}
                      <span className="ml-1">{t.users}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-semibold text-[#F46609]">
                    {t.sale} OFF
                  </div>
                  <div className="text-xs text-gray-500">
                    Expires in {t.expires} days
                  </div>
                </div>
              </div>

              {/* Progress Bar at the bottom */}
              <div className="mt-2">
                <div className="flex justify-between">
                  <div className="text-sm font-medium">Conversion Rate</div>
                  <span className="text-sm font-medium">60%</span>
                </div>
                <div className="w-full bg-[#E8E7E7] rounded-full h-3 mt-2 overflow-hidden">
                  <div
                    className="h-3 rounded-full"
                    style={{ width: "62%", backgroundColor: "#F46609" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
