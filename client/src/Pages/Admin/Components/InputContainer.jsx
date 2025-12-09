import { FormGroup } from "../../../Components/FormGroup"
import ReactSelect from "react-select"
import { Controller } from "react-hook-form"
import "./InputContainer.css"

export function InputContainer({
  label,
  type,
  placeholder,
  register,
  errorMessage,
  renderedOptions,
  setOptionId,
  chosenId,
  control,
  name,
  registerOptions
}) {
    return (
        <div className="form-input-div">
            <div className="form-input-grid">
                <label className="form-input-label">{label}</label>

                {type === "textarea" ? (
                    <textarea {...register} placeholder={placeholder} className="form-text-area"/>
                ) : type === "text" ? (
                    <input {...register} type={type} placeholder={placeholder} />
                ) : (
                    <Controller 
                        name={name}
                        control={control}
                        rules={registerOptions}
                        render={({ field }) => (
                            <ReactSelect
                                options={renderedOptions}
                                value={renderedOptions.find(opt => opt.value === field.value) || null}
                                onChange={(option) => {
                                    field.onChange(option.value);  // store the value in react-hook-form
                                    if (setOptionId) setOptionId(option.value);  // update local state
                                }}
                                className="react-select-box"
                            />
                        )}
                    />
                )}
            </div>
            {errorMessage && <FormGroup errorMessage={errorMessage} />}
        </div>
    )
}
