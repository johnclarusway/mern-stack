import React, { useState } from "react";
import { MediaCard } from "../components/MediaCard";
import { Tag } from "antd";
const { CheckableTag } = Tag;

const tagsData = ["Any", "Animals", "Arch", "Nature", "People", "Tech"];

const BookList = () => {
  const [selectedTag, setSelectedTag] = useState(["Any"]);

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
