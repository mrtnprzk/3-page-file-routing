import { useRouter } from "next/router";

function IdPage() {
  const router = useRouter();

  console.log("1", router);
  console.log("2", router.pathname);
  console.log("3", router.query);
  console.log("4", router.asPath);

  return (
    <div>
      <h1>The Id Page</h1>
    </div>
  );
}

export default IdPage;
