Accelerating end-to-end YOLO Inference in Python
------------------------------------------------

There are many ways to run inference of a YOLO model through Python.
Underneath many of these methods is the popular machine learning framework PyTorch.
PyTorch powers much of the industry and academic community who do research in machine learning focusing on CNN models through modern day transformer based architectures.
While PyTorch is great for creating, iterating, and training models it suffers in inference performance.
This is because the each layer in PyTorch corresponds so a single (or multiple) kernel call on the GPU inference programming model used by the hardware. Examples of this could be NVIDIAs CUDA or AMDs ROCM.
On fast and modern desktop hardware GPUs the usage of PyTorch provides reasonable performance since the runtime is low. But on more performance limited devices the use of PyTorch can introduce significant overhead.

Take for example, a NVIDIA Jetson series board such as the Xavier NX or the Orin AGX. These SoCs are designed to provide significant GPU computational power relative to a fixed physical size and power profile. The Orin AGX provides a 2048 CUDA core GPU and an 8-core ARM cpu. Compared to the GPU, the CPU is very weak, meaning that all possible computational should be offloaded to the GPU when possible. 
When PyTorch executes a layer of a DNN, it is represented with at least a single CUDA kernel call and then a thread syncronization. Once the first pass on the model has been executed this overhead is lower since the memory allocations do not need to occur. However, the cost of calling a kernel and syncronizing on each layer execution means that the processing time can be prohibitively high.

On such devices, there typically exists a DNN "compiler" which aims to remove these inefficiencies in execution. For NVIDIA GPUs and Jetsons this is called TensorRT, for Intel based processors this is OpenVINO. 
TODO: add discussion of ease-of-use vs. performance

By compiling a DNN with TensorRT, you can typically observe up to a 2x reduction in inference latency. However, when comparing the inference time in Python for popular inference frameworks vs. the raw execution time of the compiled model, the overhead of using the framework can be incredibly high (TODO: put number).

TODO: add how to measure the GPU latency, trtexec

What are the bottlenecks?
-------------------------

Profiling Ultralytics reveals X TODO: fill in


How can we make improvements?
-----------------------------




Outline
1. Performing Inference with TensorRT
2. Current ways to perform inference in Python
3. Ease-of-use vs. performance
4. Analysis of raw TensorRT vs. frameworks
    - Where are the bottlenecks
5. How to improve the performance
    - Pagelocked memory
    - No-CPU side setup
    - No extra data transfers
