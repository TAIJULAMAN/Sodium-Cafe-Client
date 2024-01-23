const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-5 md:my-8 lg:my-10">
            <p className="text-[#2B3440] mb-2"> --- {subHeading} --- </p>
            <h3 className="text-3xl uppercase border-[#2B3440] border-y-4 py-4">{heading}</h3>
        </div>
    );
};
export default SectionTitle;