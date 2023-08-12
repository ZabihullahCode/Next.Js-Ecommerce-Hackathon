"use client";
import BestSellingCard from "../../components/bestSellingCard";
import { useAppSelector } from "../store/hooks";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const product = useAppSelector((state) => state.products);
  const bestSell = product.filter((val) => val.category == params.category);
  return (
    <div>
      {/* Heading Div */}
      <div className="text-center mb-10">
        <h1
          className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-4
        capitalize"
        >
          {params.category}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-[100px] h-1 rounded-full bg-orange-500 inline-flex" />
        </div>
      </div>
      {/* Category starts from Here */}
      <div className="flex flex-wrap justify-center gap-4">
        {bestSell.map((items: any, i) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
