/* eslint-disable no-shadow */
import { Alert, Card, Image, message, Skeleton, Space } from "antd";
import Layout from "components/common/layout";
import State from "components/common/state";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import ownerService from "services/owner";
import JobTask from "module/detail-job/job-task";
import JobHiring from "module/detail-job/job-hiring";

function DetailJob() {
    const { id } = useParams();

    const posterQuery = useQuery(
        ["poster", id],
        async () => {
            const poster = await ownerService.GetOnePoster({ pid: id as any });
            return poster;
        },
        {
            enabled: !!id,
        }
    );

    const refetchQuery = () => {
        posterQuery.refetch();
    };

    return (
        <Layout>
            <br />
            <State data={posterQuery.data} isLoading={posterQuery.isLoading} isError={posterQuery.isError}>
                {(state) => (
                    <>
                        <State.Data state={state}>
                            {posterQuery.data?.type_of_job === "task" && <JobTask refetchQuery={refetchQuery} fetcher={posterQuery} />}
                            {posterQuery.data?.type_of_job === "hiring" && <JobHiring refetchQuery={refetchQuery} fetcher={posterQuery} />}
                        </State.Data>
                        <State.Loading state={state}>
                            <Skeleton paragraph={{ rows: 5 }} active />
                            <Skeleton.Image active />
                        </State.Loading>
                        <State.Error state={state}>
                            <Alert message={(posterQuery.error as any)?.message || posterQuery.error} type="error" />
                        </State.Error>
                    </>
                )}
            </State>
        </Layout>
    );
}

export default DetailJob;
