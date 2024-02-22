<?php

namespace App\DTO;

class ApiResponse
{
    private $data;
    private $message;
    private $status;

    public function __construct($data, $message, $status)
    {
        $this->data = $data;
        $this->message = $message;
        $this->status = $status;
    }

    /**
     * Get the value of data.
     *
     * @return mixed
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Set the value of data.
     *
     * @param mixed $data
     */
    public function setData($data)
    {
        $this->data = $data;
    }

    /**
     * Get the value of message.
     *
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Set the value of message.
     *
     * @param string $message
     */
    public function setMessage($message)
    {
        $this->message = $message;
    }

    /**
     * Get the value of status.
     *
     * @return bool
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set the value of status.
     *
     * @param bool $status
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }
}

