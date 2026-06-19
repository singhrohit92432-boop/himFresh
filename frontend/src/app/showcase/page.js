import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

export default function Showcase() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">
        UI Components Showcase
      </h1>

      <Button>Shop Now</Button>

      <Input placeholder="Enter your name" />

      <Loader />

      <Toast />

      <Modal />
    </div>
  );
}