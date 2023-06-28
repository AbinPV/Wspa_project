import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <Header>Home</Header>
      <img
        style={{ width: "70%", height: "90vh", margin: "auto" }}
        src="https://cdn.dribbble.com/userupload/8174541/file/original-714f345bc87755c6ad9beadbe3a2c653.jpg?compress=1&resize=1456x819"
        alt="movie-img"
      />
    </div>
  );
}
