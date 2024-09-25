import envConfig from "@/src/config/envConfig";
// import { delay } from "@/src/utils/delay";

export const getRecentPost = async () => {
    const fetchOptions = {
        next: {
            tags: ["posts"]
        }
    }
    const res = await fetch(`${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`, fetchOptions);

    // await delay(2000)

    return res.json();
}