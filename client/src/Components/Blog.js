import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { motion } from "framer-motion";
import { HStack, VStack, Flex, Image, Text } from "@chakra-ui/react";

const Blog = () => {
  const MotionHStack = motion(HStack);
  const { isLoading, data, error } = GetBlogs();

  //to ensure 3 blogs get shown
  const [blogCount, setBlogCount] = useState(2);

  //Blog display
  const BlogCard = ({ blog, index }) => {
    const [display, setDisplay] = useState(false);
    //return nothing and show another blog if its hidden
    if (blog.hide) {
      setBlogCount(blogCount + 1);
      return null;
    }
    if (index > blogCount) return null;
    return (
      <a
        href={`https://www.king-of.tech/blog/${blog.slug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MotionHStack
          position="relative"
          overflow="hidden"
          borderRadius="5px"
          w="340px"
          h="260px"
          m="15px"
          bg="black"
          cursor="pointer"
          key={index}
          onMouseEnter={() => setDisplay(true)}
          onMouseLeave={() => setDisplay(false)}
          whileHover={{ scale: 1.15, zIndex: "9999" }}
        >
          <Image
            w="100%"
            h="100%"
            objectFit="cover"
            src={blog.thumbnail}
            position="absolute"
            top="0"
            left="0"
            opacity={display ? "0.25" : "0.6"}
          />
          <VStack
            w="100%"
            textAlign="center"
            zIndex="99"
            p="10px"
            color="white"
          >
            {display ? (
              <>
                <Text textStyle="excerpt" m="10px">
                  {blog.excerpt}
                </Text>
              </>
            ) : (
              <h5>{blog.title}</h5>
            )}
          </VStack>
        </MotionHStack>
      </a>
    );
  };

  if (error) return <h1>Whoops something went wrong.</h1>;

  return (
    <VStack maxW="1200px" mx="auto" my="200px" textAlign="center" spacing={10}>
      <h2>My Blog</h2>
      <Flex direction={{ base: "column", md: "row" }} s>
        {isLoading
          ? "Loading"
          : data.map((blog, index) => <BlogCard blog={blog} key={index} />)}
      </Flex>
    </VStack>
  );
};

// fetch query
const API = axios.create({
  baseURL: "https://king-of-tech.herokuapp.com/api",
});

function GetBlogs() {
  return useQuery("blogs", async () => {
    const { data } = await API.get(`/blog/`);
    return data;
  });
}
export default Blog;
