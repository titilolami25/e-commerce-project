import type { FC } from "react";

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}


const Sidebar: FC<SidebarProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
}) => {
  return (
    <aside
      className="w-full md:w-64 bg-pink-100 shadow-md 
    rounded-md p-4 space-y-3
    "
    >
      <h2 className="text-xl font-bold mb-2 text-gray">Categories</h2>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className={`block text-left w-full px-3 py-2 roundedtransition ${
    activeCategory === category
      ? "bg-accent text-white"
      : "text-gray-700 hover:bg-accent hover:text-white"
  }
  `}
        >
          {category}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar
