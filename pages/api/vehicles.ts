import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const sample = [
      {
        id: "c1",
        title: "2018 Toyota Hilux 2.8 D-4D",
        lot: "COP-1234567",
        image: "/etillogo.jpeg",
        location: "Accra, Ghana",
        status: "Available",
        damage: "Front end",
        price: "£4,200",
      },
      {
        id: "c2",
        title: "2016 Ford Ranger 3.2 TDCi",
        lot: "IAA-7654321",
        image: "/etillogo.jpeg",
        location: "Lagos, Nigeria",
        status: "Available",
        damage: "Rear",
        price: "£3,800",
      },
      {
        id: "c3",
        title: "2015 Mercedes Sprinter 311",
        lot: "COP-246810",
        image: "/etillogo.jpeg",
        location: "Tema, Ghana",
        status: "Sold",
        damage: "None",
        price: "£6,500",
      },
    ];

    return res.status(200).json({ vehicles: sample });
  } catch (err) {
    return res.status(500).json({ vehicles: [], error: String(err) });
  }
}
