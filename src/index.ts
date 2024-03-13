import { prismaCreate } from "./queries/create";
import { dropTable } from "./queries/dropTable";
import { readData } from "./queries/readDate";


(async function main() {
  // await dropTable("posts");
  // const create = await prismaCreate();

  const allDate = await readData({ limit: 10, page: 0 })


  console.log(allDate);
  return 0;
})();