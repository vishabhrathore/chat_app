import { Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography } from "@mui/material"
import React from "react"
import DashboardLayout from "./index"
import { PiCircleDashedBold } from "react-icons/pi"
import { styled, alpha } from "@mui/material/styles"
import { BiSearch, BiArchiveIn } from "react-icons/bi"
import { faker } from "@faker-js/faker"
import BadgeAvatars from "../comp/badge"
import { ChatList } from "../data/index"
import { SimpleBarStyle } from "../comp/Scrollbar"
// const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//       backgroundColor: '#44b700',
//       color: '#44b700',
//       boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//       '&::after': {
//         position: 'absolute',
//         top: '-1px',
//         left: '-1px',
//         width: '100%',
//         height: '100%',
//         borderRadius: '50%',
//         animation: 'ripple 1.2s infinite ease-in-out',
//         border: '1px solid currentColor',
//         content: '""',
//       },
//     },
//     '@keyframes ripple': {
//       '0%': {
//         transform: 'scale(.8)',
//         opacity: 1,
//       },
//       '100%': {
//         transform: 'scale(2.4)',
//         opacity: 0,
//       },
//     },
//   }));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    return (
        <Box sx={{
            width: "100%",
            borderRadius: 2,
            backgroundColor: "#fff",

            boxSizing: "border-box",
        }}
            p={2}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    {online ? <BadgeAvatars src={faker.image.avatar()} /> : <Avatar src={faker.image.avatar()} />}
                    <Stack spacing={0.3} direction={"column"}>
                        <Typography variant="subtitle2" fontWeight={600}>
                            {name}
                        </Typography>
                        <Typography variant="caption">
                            {msg}
                        </Typography>
                    </Stack>
                </Stack>

                <Stack alignItems={"center"} spacing={0.3} direction={"column"}>
                    <Typography fontWeight={600} variant="caption">{time}</Typography>
                    <Typography>
                        <Badge color="primary" badgeContent={unread} />
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginLeft: 0,
    width: "100%"
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        width: "100% ",
        paddingLeft: 50
    }
}))

const Chats = () => {
    return (

        <Stack>
            <Stack direction={"row"} sx={{height:"100vh"}}>
                
                <Box sx={{
                    position: "relative",
                    width: 320,
                    backgroundColor: "#F8FAFF",
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25) ",
                }}>
                    <Stack p={2.5} spacing={2} height={"100vh"}>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent="space-between"
                        >
                            <Typography variant="h5">Chats</Typography>
                            <IconButton>
                                <PiCircleDashedBold />
                            </IconButton>
                        </Stack>
                        <Stack width={"100%"}>
                            <Search>
                                <SearchIconWrapper>
                                    <BiSearch color="#709ce6" />
                                </SearchIconWrapper >
                                <StyledInputBase placeholder="search..." inputProps={{ "aria-label": "search" }} />
                            </Search>
                        </Stack>

                        <Stack spacing={1}>
                            <Stack direction={"row"} alignItems={"center"} spacing={1.5} >
                                <BiArchiveIn size={24} />
                                <Button>Archive</Button>
                            </Stack>
                            <Divider></Divider>
                        </Stack>
                        <Stack spacing={1.5} sx={{flexGrow:1, overflow:"scroll" ,height:"100%"}}>
                            <SimpleBarStyle>
                            <Stack spacing={0.5}>
                                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                                    Pinned
                                </Typography>
                                <Stack spacing={1}>
                                    {
                                        ChatList.filter((el) => el.pinned).map((elem) => {
                                            return <ChatElement {...elem} />
                                        })
                                    }
                                </Stack>
                            </Stack>
                            <Stack spacing={0.5}>
                                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                                    All Chats
                                </Typography>
                                <Stack spacing={1}>
                                    {
                                        ChatList.map((elem) => {
                                            return <ChatElement {...elem} />
                                        })
                                    }
                                </Stack>
                            </Stack>
                            </SimpleBarStyle>
                        </Stack>
                    </Stack>

                </Box>
            </Stack>

        </Stack>


    )
}

export default Chats