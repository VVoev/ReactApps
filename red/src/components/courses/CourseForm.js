import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput'


const CourseForm = ({course,allAuthors,onSave,onChange,loading,errors})=> {
    return(
        <form>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
            />
            <SelectInput
                name="authorId"
                label="AuthorId"
                value={course.authorId}
                defaultOption="Select Value"
                options={allAuthors}
                onChange={onChange} erros={errors.authorId}
            />
            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}
            />
            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
            />
            <input type="submit" disabled={loading} value={loading ? "Saving" :"Save"} className="btn btn-primary" onClick={onSave}/>
        </form>
    )
}

export default CourseForm;
