import { Box, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import BadgeAvatars from "../comp/badge";
import { AiOutlineDown, AiOutlinePhone, AiOutlineVideoCamera, AiOutlineLink } from "react-icons/ai";
import { BiSearch } from "react-icons/bi"
import styled from "@emotion/styled";

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12 px",
        paddingBottom: "12px",
    }
}))

const Conversation = () => {
    return (
        <>
            <Stack height={"100%"} width={"auto"} maxHeight={"100vh"}>
                <Box p={2} sx={{
                    width: "100%",
                    backgroundColor: "#f8faff",
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                    boxSizing: "border-box"
                }}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} height={"100%"} width={"100%"}
                    >
                        <Stack direction={"row"} spacing={2}>
                            <BadgeAvatars src={faker.image.avatar()} />
                            <Stack spacing={0.3}>
                                <Typography variant="subtitle2">{faker.person.fullName()}</Typography>
                                <Typography variant="caption" >online</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                            <IconButton>
                                <AiOutlinePhone />
                            </IconButton>
                            <IconButton>
                                <AiOutlineVideoCamera />
                            </IconButton>
                            <IconButton>
                                <BiSearch />
                            </IconButton>
                            <Divider orientation="vertical" flexItem />
                            <IconButton>
                                <AiOutlineDown />
                            </IconButton>


                        </Stack>

                    </Stack>

                </Box>
                <Box width={"100%"} sx={{ flexGrow: 1, }}></Box>
                <Box p={2} sx={{
                    height: 100,
                    width: "100%",
                    backgroundColor: "#000",
                    backgroundColor: "#f8faff",
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                    boxSizing: "border-box"
                }}>
                    <Stack direction={"row"} spacing={3} >
                        <StyledInput
                            fullWidth
                            placeholder="Write a message..."
                            variant="filled"
                            InputProps={{
                                disableUnderline: true,
                                startAdornment: <InputAdornment>
                                    <IconButton>
                                        <AiOutlineLink />
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </Stack>

                </Box>

            </Stack>
        </>
    )
}

export default Conversation