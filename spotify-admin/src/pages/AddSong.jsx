import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import assets from "../assets";
import toast from "react-hot-toast";

const AddSong = () => {
  const [image, setImage] = useState(null);
  const [song, setSong] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [albumData, setAlbumData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image || !song || !name || !desc) {
      toast.error("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("image", image);
    formData.append("song", song);
    formData.append("album", album);

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/song", formData);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to upload song");
    } finally {
      setLoading(false);
    }
  };

  const fetchAlbums = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/album");
      setAlbumData(res.data);
    } catch (err) {
      toast.error("Failed to fetch albums");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (loading) {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <div className="w-16 h-16 border-4 border-gray-400 border-t-green-800 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmitHandler} className="p-8 w-full max-w-5xl mx-auto text-gray-700">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Admin Panel</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-start gap-2">
          <p className="font-medium">Upload Song</p>
          <input onChange={(e) => setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden />
          <label htmlFor="song">
            <img
              src={song ? assets.upload_added : assets.upload_song}
              className="w-24 cursor-pointer"
              alt="upload_song"
            />
          </label>
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="font-medium">Upload Image</p>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden />
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-24 h-24 object-cover cursor-pointer"
              alt="upload_area"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label className="font-medium">Song Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          placeholder="Enter song name"
          required
        />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label className="font-medium">Song Description</label>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          placeholder="Enter song description"
          required
        />
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <label className="font-medium">Album</label>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          value={album}
          className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-[250px]"
        >
          <option value="none">None</option>
          {albumData.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-10 py-3 rounded-md hover:bg-green-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default AddSong;
