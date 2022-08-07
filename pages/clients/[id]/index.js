import { useRouter } from "next/router";

function ClientsProjectPage() {

  const router = useRouter();
  console.log(router);
  const name = router.query.id;

  function loadProjectHandler() {
    //load data...
    router.push(`/clients/${name}/projecta`);
  }

  return (
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectPage;
