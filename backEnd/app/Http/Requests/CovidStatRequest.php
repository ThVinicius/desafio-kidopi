<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CovidStatRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules()
    {
        return [
            'country' => ['required', 'string'],
            'search_date' => ['required', 'date', 'date_format:Y-m-d H:i:s']
        ];
    }

    public function messages()
    {
        return [
            'country.required' => 'O campo país é obrigatório.',
            'search_date.required' => 'O campo data de pesquisa é obrigatório.',
            'search_date.date_format' => 'A data da pesquisa deve estar no formato "ano-mês-dia hora:minutos:segundos".'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status_code' => 400,
            'message' => 'Erro na validação',
            'errors' => $validator->errors()
        ], 400));
    }
}
