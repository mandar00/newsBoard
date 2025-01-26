"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import searchIcon from "@/assets/searchIcon.svg";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { cn } from "@/lib/utils";
import debounce from "lodash/debounce";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { getNewsByTitle } from "@/app/news/actions";

interface InputWithStartIconProps {
  handleInput?: (input: string) => void;
  inputValue?: string;
  inputClassName?: string;
}

const InputWithStartIcon = ({
  handleInput,
  inputValue,
  inputClassName,
}: InputWithStartIconProps) => {
  return (
    <>
      <Image
        className="m-[0.6vw]"
        src={searchIcon}
        alt="search"
        width={20}
        height={20}
      />
      <Input
        className={cn(
          "hidden focus-visible:ring-0 border-none shadow-none lg:placeholder:text-[14px] md:placeholder:text-[12px]  md:flex",
          inputClassName
        )}
        id="q"
        name="q"
        placeholder="Search for Colleges Exams Courses and More..."
        onChange={(e) => handleInput && handleInput(e.target.value)}
        value={inputValue}
      />
    </>
  );
};

const NavbarSearch = () => {
  const { isOpen, toggleModal } = useModal();
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<
    (
      | {
          title: string;
          slug: string;
        }
      | undefined
    )[]
  >();
  const [loading, setLoading] = useState(false);

  const handleInput = async (query: string) => {
    setInputValue(query);
  };

  const fetchNews = debounce(async (query: string) => {
    try {
      setLoading(true);
      const news = await getNewsByTitle(query);
      setResults(news);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, 500);

  useEffect(() => {
    if (inputValue !== "") {
      fetchNews(inputValue);
      return () => fetchNews.cancel();
    }
  }, [inputValue]);

  const resetStates = () => {
    setInputValue("");
    setResults([]);
    setLoading(false);
  };

  Modal.setAppElement("#portal-root");

  return (
    <>
      <div
        className="flex items-center  h-[2.3vw] md:w-[23.3vw] cursor-pointer"
        onClick={toggleModal}
      >
        <InputWithStartIcon />
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className={cn("Modal p-3")}
        overlayClassName="Overlay"
        onAfterClose={resetStates}
      >
        <div className="flex items-center border-b-2 ">
          <InputWithStartIcon
            handleInput={handleInput}
            inputValue={inputValue}
            inputClassName="flex"
          />
        </div>
        {loading ? (
          <Loader2 className={cn("animate-spin m-auto w-[5vw]")} />
        ) : (
          <div className="flex flex-col h-full overflow-y-auto no-scrollbar mt-3">
            {results?.map((result, resultIndex) => {
              return (
                <Link
                  key={resultIndex}
                  href={`/news/${result?.slug}`}
                  id={result?.slug}
                  onClick={toggleModal}
                  className={cn(
                    "px-5 py-2 border-b-2",
                    resultIndex % 2 === 0 ? "bg-muted" : "bg-white"
                  )}
                >
                  {result?.title}
                </Link>
              );
            })}
          </div>
        )}
      </Modal>
    </>
  );
};
export default NavbarSearch;
