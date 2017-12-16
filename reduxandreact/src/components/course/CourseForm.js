import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course,allAuthors,onSave,onChange,loading,errors})=>{
    debugger;
    return(
        <form>
            <TextInput
            name="title" title="title" value={course.title}
            onChange={onChange} error={errors.title}/>
            <SelectInput
                name="authorId" label="Author" value={course.value}
                defaultOption="Select Author" options={allAuthors}
                onChange={onChange} error={errors.authorId}
            />
            <TextInput
                name="category" title="category" value={course.category}
                onChange={onChange} error={errors.category}/>
            <TextInput
                name="length" title="Length" value={course.length}
                onChange={onChange} error={errors.length}/>
            <input type="submit"
                   disabled={loading} value={loading ? "Saving..." : "Save"}
                   className="btn btn-primary"
                   onClick={onSave}
            />
        </form>
    );
};

export default CourseForm;

