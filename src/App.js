import "./App.css";
import {
  Box,
  Stack,
  Paper,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import db from "./firebaseApp";
// import { collection, getDocs, addDoc ,updateDoc,doc} from "firebase/firestore";

function App() {
  const [tvText, setTvText] = useState("");
  const [fetchData, setfetchData] = useState([]);

  // useEffect(() => {
  //   const list1 = collection(db, "data");
  //   getDocs(list1)
  //     .then((res) => {
  //       const array = res.docs.map((item) => {
  //         return item.data();
  //       });
  //       setfetchData(array[0].array);
  //       console.log(">>>>>>>>> res", array);
  //     })
  //     .catch((err) => console.log(">>>>>>>>>> err", err));
  // }, []);

  // const sub = (e) => {
  //   const list1 = doc(db, "data","0inxG69UboiQ8lU3PBdV");
  //   addDoc(list1,{id1:"newVal3"})
  //     .then((res) => {
  //       // const array = res.docs.map((item) => {
  //       //   console.log(">>>>>>>>> valll", item.data());
  //       //   return item.data();
  //       // });
  //       // setfetchData(array);
  //       console.log(">>>>>>>>> res", res);
  //     })
  //     .catch((err) => console.log(">>>>>>>>>> err", err));
  // };

  const handleSend = () => {
    if (tvText.length <= 0) return;
    setfetchData((prv) => {
      return [...prv, tvText];   

    });
    setTvText("");
  };

  const handleDelete = (index) => {
    const array = [...fetchData];
    array.splice(index, 1);
    setfetchData(array);
  };

  const handleUpShift = (index) => {
    const array = [...fetchData];
    const removeItem = array.splice(index, 1);
    array.splice(index - 1, 0, ...removeItem);
    setfetchData(array);
  };

  const handleDownShift = (index) => {
    const array = [...fetchData];
    const removeItem = array.splice(index, 1);
    array.splice(index + 1, 0, ...removeItem);
    setfetchData(array);
  };

  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack sx={{ width: "30%" }}>
        {fetchData?.map((item, index) => (
          <Paper
            key={index}
            sx={{
              backgroundColor: "#e3e9fe",
              display: "flex",
              px: "10px",
              py: "5px",
              mt: "5px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1">{item}</Typography>
            <Stack direction="row">
              <Stack direction="row">
                <IconButton
                  disabled={index === 0}
                  onClick={() => handleUpShift(index)}
                >
                  <ArrowDropUpIcon
                    sx={{
                      color: index === 0 ? "gray" : "blue",
                      fontSize: "30px",
                    }}
                  />
                </IconButton>
                <IconButton
                  disabled={index === fetchData.length - 1}
                  onClick={() => handleDownShift(index)}
                >
                  <ArrowDropDownIcon
                    sx={{
                      color: index === fetchData.length - 1 ? "gray" : "blue",
                      fontSize: "30px",
                    }}
                  />
                </IconButton>
              </Stack>
              <IconButton onClick={() => handleDelete(index)}>
                <CloseIcon sx={{ color: "red", fontSize: "25px" }} />
              </IconButton>
            </Stack>
          </Paper>
        ))}

        <Stack
          component={Paper}
          direction="row"
          sx={{
            backgroundColor: "#e3e9fe",
            p: "8px",
            mt: "10px",
            mb: "20px",
          }}
        >
          <TextField
            fullWidth
            size="small"
            value={tvText}
            onChange={(e) => setTvText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTvText(e.target.value);
                handleSend();
              }
            }}
          />
          <Button
            sx={{ textTransform: "none", ml: "10px" }}
            variant="contained"
            // onClick={handleSend}
            onClick={handleSend}
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
