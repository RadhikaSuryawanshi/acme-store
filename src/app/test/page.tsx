"use client";

import { Skeleton } from "boneyard-js/react";

export default function Test({ loading }: { loading: boolean }) {
  return (
    <Skeleton name="test-card" loading={loading}>
      <div className="border p-5 rounded-xl">
        <h1>Product</h1>
        <p>Description</p>
      </div>
    </Skeleton>
  );
}
