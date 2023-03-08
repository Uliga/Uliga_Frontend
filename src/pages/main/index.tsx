import React from "react";
import { useQuery } from "@tanstack/react-query";
import { loadMe } from "../../api/user";
import LoadingBar from "../../components/common/LoadingBar";

export default function Main() {
  const {
    isLoading,
    data: { memberInfo, invitations },
  } = useQuery(["me"], loadMe);

  if (isLoading) return <LoadingBar type={8} />;
  return (
    <div>
      {memberInfo.email}
      {invitations}
    </div>
  );
}
