---
title: "Task Controllers"
---

# Task Controllers

## Overview

UltimateXR provides task controller classes that simplify running asynchronous tasks and loops in Unity, handling the creation of a `CancellationToken` and automatically stopping when the application quits or the Unity editor exits play mode.

You can also check the [Task Controllers API Reference](/api/N_UltimateXR_Core_Threading_TaskControllers).

## UxrCancellableController

The abstract base class for all task controllers. It provides the core `Start`/`Stop` pattern and automatic cleanup.

### Properties

- `bool` `IsRunning`  
  Gets whether the inner job is currently running.

### Events

- `Completed`  
  Triggered when the inner job completes without being canceled.

### Methods

- `void` `Start()`  
  Starts running the inner job until completion or `Stop` is called.
- `void` `Start(int durationMilliseconds)`  
  Starts running the inner job for a maximum duration.
- `void` `Stop()`  
  Stops the inner job by canceling the `CancellationToken`.

### Automatic Cleanup

The controller automatically calls `Stop` when:
- `Application.quitting` is raised (the application is closing).
- The Unity editor exits play mode.

This ensures that background tasks never outlive the application or play session.

## UxrTaskController

A concrete implementation that wraps an asynchronous `Task` into the `Start`/`Stop` pattern.

### Constructor

```c#
// Create a task controller (autoStart = false means Start() must be called manually)
UxrTaskController taskController = new UxrTaskController(ct => MyTask(10, ct), autoStart: false);
```

**Parameters:**
- `Func<CancellationToken, Task>` taskFunc: The cancelable task to execute. It gets the `CancellationToken` as parameter.
- `bool` autoStart: If `true`, the task starts immediately. If `false`, `Start()` must be called manually.

### Example

```c#
// Define an async task
public async Task MyTask(int parameterA, CancellationToken ct)
{
    await SomethingAsync(ct);
}

// Create and start the task controller
UxrTaskController taskController = new UxrTaskController(ct => MyTask(10, ct), autoStart: false);

// Start manually
taskController.Start();

// Stop at any point
taskController.Stop();
```

## UxrLoopController

A concrete implementation that runs a cancelable action repeatedly in a loop until `Stop` is called.

### Constructor

```c#
// Create a loop controller that starts immediately
UxrLoopController loopController = new UxrLoopController(ct =>
{
    // This action will be called repeatedly
    ProcessData(ct);
});
```

**Parameters:**
- `Action<CancellationToken>` loopAction: The cancelable action to execute repeatedly.
- `int` autoStartDelayMilliseconds: If set, the loop starts after the specified delay. If not set (`-1`), the loop starts immediately.

### Explicit Conversion

An `Action<CancellationToken>` can be explicitly converted to a `UxrLoopController`:

```c#
UxrLoopController loop = (UxrLoopController)(ct => ProcessData(ct));
```

### Example

```c#
// Create a loop that processes data every iteration
UxrLoopController loopController = new UxrLoopController(ct =>
{
    while (!ct.IsCancellationRequested)
    {
        ProcessNextItem();
        Thread.Sleep(100);
    }
});

// Stop the loop when done
loopController.Stop();
```

## API Reference

For more information, refer to the [Task Controllers API Reference](/api/N_UltimateXR_Core_Threading_TaskControllers).
