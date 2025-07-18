import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/api";
const InfiniteData = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage, allPages);
        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
    });

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1;
    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);
  return (
    <div>
      <h1>Infinite Scrolling</h1>
      {data?.pages?.map((page, index) => (
        <ul key={index}>
          {page.map((user) => (
            <li key={user.id}>
              <p>{user.login}</p>
              <img src={user.avatar_url} alt="" style={{ width: "50px" }} />
            </li>
          ))}
        </ul>
      ))}
      {isFetchingNextPage && <div>Loading More........</div>}
    </div>
  );
};

export default InfiniteData;
