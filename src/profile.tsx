import React, { useEffect, useState } from "react";
import { Anchor, Row, Col } from "antd";

const ProfileCard: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <div>
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            style={{
              background: "rgba(255,0,0,0.02)",
            }}
          >
            Part 1
          </div>
          <div id="part-2" style={{ background: "rgba(0,255,0,0.02)" }}>
            Part 2
          </div>
          <div id="part-3" style={{ background: "rgba(0,0,255,0.02)" }}>
            Part 3
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Part 1",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Part 2",
              },
              {
                key: "part-3",
                href: "#part-3",
                title: "Part 3",
              },
            ]}
          />
        </Col>
      </Row>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          color: "black",
        }}
        ref={topRef}
      >
        <div>Contact List</div>
      </div>
    </div>
  );
};

export default ProfileCard;
