<?php

namespace App\Model;


class ApiResponse
{
    public $data;
    public $message;
    public $errors;
    public $status;

    public function __construct($data = null, $message = null, $errors = null, $status = 200)
    {
        $this->data = $data;
        $this->message = $message;
        $this->errors = $errors;
        $this->status = $status;
    }

    public static function success($data = null, $message = null, $status = 200)
    {

        return new self($data, $message, null, $status);
    }

    public static function error($message = null, $status = 400, $errors = null)
    {
        return new self(null, $message, $errors, $status);
    }

}
