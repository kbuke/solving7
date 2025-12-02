import { usePost } from "../../../../../Requests/usePost"
import { PostPatchSection } from "./PostPatchSection"

export function PostSection({
    register,
    handleSubmit,
    errors,
    allHomeSections,
    setAllHomeSections,
    setSectionAction,
    inputContainer
}){
    const handleSectionPost = (formData) => {
        usePost("/api/homesection", formData, allHomeSections, setAllHomeSections, setSectionAction)
    }

    return (
        <PostPatchSection 
            patchOrPost={"post"}
            allSections={allHomeSections}
            setSectionAction={setSectionAction}
            handleSectionPost={handleSectionPost}
            handleSubmit={handleSubmit}
            inputContainer={inputContainer}
            register={register}
            errors={errors}
        />
    )
}