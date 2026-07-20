import type { LeetcodeStats } from "../types/leetcode";
import { LEETCODE_USERNAME } from "../constants/profile";

const query = `
query userProblemsSolved($username: String!) {
  matchedUser(username: $username) {
    submitStatsGlobal {
      acSubmissionNum {
        count
      }
    }
  }
}
`;

export async function getLeetcodeStats(): Promise<LeetcodeStats> {
  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        username: LEETCODE_USERNAME,
      },
    }),
  });

  const json = await response.json();

  return {
    solved:
      json.data.matchedUser.submitStatsGlobal.acSubmissionNum[0].count,
  };
}