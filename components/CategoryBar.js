"use client";

import { useEffect, useState } from "react";
import CategoryBarItem from "./CategoryBarItem";

const CategoryBar = () => {
  var [categoryItems, setCategoryItems] = useState([
    { id: "1", logo: "📱", title: "Mobiles", isSelected: false },
    { id: "2", logo: "📺", title: "TV", isSelected: false },
    { id: "3", logo: "🎧", title: "Electronics", isSelected: false },
    // { id: "4", logo: "👕", title: "Men's Fashion", isSelected: false },
    // { id: "5", logo: "👗", title: "Women's Fashion", isSelected: false },
  ]);

  var catogoryClicked = (id) => {
    setCategoryItems(
      categoryItems.map((item) => {
        if (item.id === id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return { ...item };
      })
    );
  };

  return (
    <div className="flex space-x-3 px-2 py-3">
      <CategoryBarItem logo="" title="" className="md:hidden" />
      {categoryItems.map((item) => (
        <CategoryBarItem
          key={item.id}
          logo={item.logo}
          title={item.title}
          selected={item.isSelected}
          onClick={() => catogoryClicked(item.id)}
        />
      ))}
    </div>
  );
};

export default CategoryBar;
