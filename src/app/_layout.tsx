import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    // <Stack>
    //   <Stack.Screen
    //     name="Index"
    //     options={{
    //       headerTitle: "Home Page",
    //       headerStyle: {
    //         backgroundColor: "blue",
    //       },
    //     }}
    //   />
    //   <Stack.Screen
    //     name="About"
    //     options={{
    //       headerTitle: "About Page",
    //       headerStyle: {
    //         backgroundColor: "blue",
    //       },
    //     }}
    //   />
    //   <Stack.Screen
    //     name="users/[id]"
    //     options={{
    //       headerTitle: "User",
    //       headerStyle: {
    //         backgroundColor: "blue",
    //       },
    //     }}
    //   />
    // </Stack>
    <Tabs>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Index" />
      <Tabs.Screen name="About" />
      <Tabs.Screen name="Contact" />
      <Tabs.Screen name="users/[id]" />
    </Tabs>
  );
};

export default RootLayout;
