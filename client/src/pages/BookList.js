import React, { useState, useEffect } from "react";
import { MediaCard } from "../components/MediaCard";
import { Tag } from "antd";
import { fetchData } from "../helper/FetchData";

const { CheckableTag } = Tag;

const tagsData = ["Any", "Animals", "Arch", "Nature", "People", "Tech"];

const BookList = () => {
  const [selectedTag, setSelectedTag] = useState(["Any"]);

  useEffect(() => {
    fetchData("http://localhost:5000/api/books").then((data) => {
      console.log("data", data);
    });
  }, []);

  const handleChange = (tag, checked) => {
    const nextSelectedTag = checked ? tag : "Any";
    setSelectedTag(nextSelectedTag);
  };

  return (
    <div>
      <div className="book-filter">
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTag.indexOf(tag) > -1}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>

      <MediaCard
        title="Test"
        description="lorem ipsum doner lit aasf adfas asdf ij iasd i"
        imgSrc="http://placeimg.com/140/200/animals"
      />
    </div>
  );
};

export default BookList;
