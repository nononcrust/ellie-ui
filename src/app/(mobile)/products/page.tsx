"use client";

import { Mobile } from "@/components/layouts/mobile";
import { Chip } from "@/components/ui/chip";
import { ChipButton } from "@/components/ui/chip-button";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { useState } from "react";

export default function ProductsPage() {
  const [currentCategory, setCurrentCategory] = useState<(typeof categories)[number]>(
    categories[0],
  );

  return (
    <Mobile>
      <h1 className="text-3xl font-bold">상품 목록</h1>
      <ul className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <li key={category}>
            <ChipButton
              className={cn(category === currentCategory && "bg-primary text-white")}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </ChipButton>
          </li>
        ))}
      </ul>
      <ul className="mt-6 grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
      <div className="flex justify-center py-16">
        <span className="text-sm font-medium text-subtle">마지막 상품입니다.</span>
      </div>
    </Mobile>
  );
}

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  return (
    <li>
      <div className="flex flex-col">
        <div className="aspect-square rounded-lg bg-background-100" />
        <div className="mt-2 flex flex-col">
          <span className="text-[13px] font-medium text-subtle">{product.vendor}</span>
          <span className="text-sm">{product.title}</span>
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold text-primary">
              {(product.discountRate * 100).toFixed(0)}%
            </span>
            <span className="text-lg font-semibold">{product.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              <StarIcon className="fill-primary text-primary" size={12} />
              <span className="text-xs font-semibold">{product.rating.toFixed(1)}</span>
            </div>
            <span className="text-xs font-medium text-subtle">
              리뷰 {product.reviewCount.toLocaleString()}
            </span>
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {product.tags.map((tag) => (
              <Chip size="medium" variant="secondary" key={tag}>
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

const categories = ["추천", "예쁜", "유용한", "귀여운", "오늘의딜"] as const;

type Product = {
  id: string;
  title: string;
  rating: number;
  price: number;
  reviewCount: number;
  discountRate: number;
  vendor: string;
  tags: string[];
};

const products: Product[] = [
  {
    id: "1",
    title: "NEW컬러 유아KC 인증 스탠다드/향균 WP워터쉴드 방수매트리스커버 10사이즈",
    rating: 4.7,
    price: 9900,
    reviewCount: 68056,
    discountRate: 0.58,
    vendor: "타카타카",
    tags: ["무료배송"],
  },
  {
    id: "2",
    title: "[최종가28,900원]리뷰8만! 고중량 40수 호텔수건 200g 코마사 타올 10장",
    rating: 4.7,
    price: 29900,
    reviewCount: 81136,
    discountRate: 0.62,
    vendor: "코튼리빙",
    tags: ["무료배송", "특가"],
  },
  {
    id: "3",
    title: "New Color 모던 트롤리 스윙 3단 빨래바구니",
    rating: 4.6,
    price: 17900,
    reviewCount: 57237,
    discountRate: 0.64,
    vendor: "네이쳐리빙",
    tags: ["무료배송", "특가"],
  },
  {
    id: "4",
    title: "[최대15%쿠폰] 부드러운 카스테라 워싱 향균 옥수수솜간절기&사계절&한파용 차렵이불세트",
    rating: 4.8,
    price: 35900,
    reviewCount: 44804,
    discountRate: 0.37,
    vendor: "헬로우슬립",
    tags: ["특가"],
  },
  {
    id: "5",
    title: "선데이 사계절 워셔블 거실 러그 7size 4colors",
    rating: 4.7,
    price: 18900,
    reviewCount: 55497,
    discountRate: 0.32,
    vendor: "바이빔",
    tags: ["무료배송", "특가"],
  },
  {
    id: "6",
    title: "[1+1]100% 빛차단/자외선차단 온도조절 방품/방한3중직 암막커튼",
    rating: 4.7,
    price: 29500,
    reviewCount: 28773,
    discountRate: 0.38,
    vendor: "스타일링홈",
    tags: ["특가"],
  },
];
