import React, { useState, useEffect } from "react";
import { MediaCard } from "../components/MediaCard";
import { Tag } from "antd";
import { fetchData } from "../helper/FetchData";

const { CheckableTag } = Tag;

const tagsData = ["Any", "Animals", "Arch", "Nature", "People", "Tech"];

const BookList = () => {
  const [selectedTag, setSelectedTag] = useState(["Any"]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetchData("/api/books").then((data) => {
      setBookList(data?.bookList);
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
      <div className="book-context">
        <div className="book-list-wrapper">
          {bookList?.length > 0
            ? bookList.map((book) => {
                return (
                  <MediaCard
                    title={book?.title}
                    description={book?.author}
                    imgSrc={`http://placeimg.com/140/200/${
                      book?.category || "any"
                    }`}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default BookList;
