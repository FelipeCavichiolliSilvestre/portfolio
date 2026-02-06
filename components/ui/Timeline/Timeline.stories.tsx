import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Timeline,
  TimelineBullet,
  TimelineContent,
  TimelineItem,
} from "./Timeline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Clock8Icon, ClipboardPenLineIcon, LeafIcon } from "lucide-react";

const meta = {
  title: "Atoms/Timeline",
  component: Timeline,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  render: () => (
    <Timeline>
      <TimelineItem>
        <TimelineBullet />
        <TimelineContent>Lorem ipsum dolor sit amet.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineBullet />
        <TimelineContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          adipisci.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineBullet />
        <TimelineContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          suscipit delectus nisi? Id quisquam dicta omnis qui veritatis impedit
          cupiditate aperiam provident quia doloremque, libero non iure
          perferendis culpa, laboriosam itaque voluptatibus. Similique modi
          corporis inventore error non, ullam a rem cupiditate ea beatae. Alias
          numquam sed quo hic asperiores.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Timeline>
      <TimelineItem>
        <TimelineBullet>
          <Clock8Icon />
        </TimelineBullet>
        <TimelineContent>Lorem ipsum dolor sit amet.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineBullet>
          <ClipboardPenLineIcon />
        </TimelineBullet>
        <TimelineContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          adipisci.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineBullet>
          <LeafIcon />
        </TimelineBullet>
        <TimelineContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          suscipit delectus nisi? Id quisquam dicta omnis qui veritatis impedit
          cupiditate aperiam provident quia doloremque, libero non iure
          perferendis culpa, laboriosam itaque voluptatibus. Similique modi
          corporis inventore error non, ullam a rem cupiditate ea beatae. Alias
          numquam sed quo hic asperiores.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Timeline>
      <TimelineItem>
        <TimelineBullet />
        <TimelineContent>
          <Card>
            <CardHeader>
              <CardTitle>Lorem, ipsum.</CardTitle>
              <CardDescription>Lorem, ipsum dolor.</CardDescription>
            </CardHeader>
            <CardContent>Lorem ipsum dolor sit amet.</CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineBullet />
        <TimelineContent>
          <Card>
            <CardHeader>
              <CardTitle>Lorem, ipsum.</CardTitle>
              <CardDescription>Lorem, ipsum dolor.</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, adipisci.
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineBullet />
        <TimelineContent>
          <Card>
            <CardHeader>
              <CardTitle>Lorem, ipsum.</CardTitle>
              <CardDescription>Lorem, ipsum dolor.</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem suscipit delectus nisi? Id quisquam dicta omnis qui
              veritatis impedit cupiditate aperiam provident quia doloremque,
              libero non iure perferendis culpa, laboriosam itaque voluptatibus.
              Similique modi corporis inventore error non, ullam a rem
              cupiditate ea beatae. Alias numquam sed quo hic asperiores.
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};
