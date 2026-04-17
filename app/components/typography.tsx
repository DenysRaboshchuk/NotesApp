import React, { FC } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

type Variant = "h1" | "h2" | "body";

interface Props {
  variant?: Variant;
  style?: TextStyle;
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  h1: { fontSize: 32, fontWeight: "bold", color: "#000" },
  h2: { fontSize: 24, fontWeight: "600", color: "#000" },
  body: { fontSize: 16, fontWeight: "normal", color: "#333" },
});

export const Typography: FC<Props> = ({
  variant = "body",
  style,
  children,
}: Props) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};
